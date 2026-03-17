import { NextResponse } from "next/server";

const PLACES_DETAILS_URL = "https://maps.googleapis.com/maps/api/place/details/json";

export interface GooglePlaceReview {
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description?: string;
  text: string;
  time?: number;
}

export interface ReviewsResponse {
  reviews: Array<{
    name: string;
    rating: number;
    text: string;
    avatar: string;
  }>;
  error?: string;
}

/**
 * Busca avaliações do Google Places usando Place ID.
 * Variáveis: GOOGLE_PLACES_API_KEY (API key), GOOGLE_PLACE_ID (ID do estabelecimento, ex: ChIJ...).
 * Se você só tem a API key em GOOGLE_PLACE_ID, defina GOOGLE_PLACES_API_KEY com ela e GOOGLE_PLACE_ID com o Place ID do negócio.
 */
export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  // Permite usar a API key na variável GOOGLE_PLACE_ID (valor atual no .env) e o Place ID em GOOGLE_PLACE_ID_FOR_REVIEWS
  const keyToUse =
    apiKey ?? (typeof placeId === "string" && /^AIzaSy/i.test(placeId) ? placeId : undefined);
  const placeIdToUse =
    typeof placeId === "string" && !/^AIzaSy/i.test(placeId)
      ? placeId
      : process.env.GOOGLE_PLACE_ID_FOR_REVIEWS;

  if (!keyToUse) {
    return NextResponse.json(
      { reviews: [], error: "GOOGLE_PLACES_API_KEY ou GOOGLE_PLACE_ID (com API key) não configurada." },
      { status: 503 }
    );
  }

  if (!placeIdToUse) {
    return NextResponse.json(
      {
        reviews: [],
        error:
          "Defina GOOGLE_PLACE_ID com o Place ID do estabelecimento (ex: ChIJ...) ou GOOGLE_PLACE_ID_FOR_REVIEWS se a API key estiver em GOOGLE_PLACE_ID.",
      },
      { status: 503 }
    );
  }

  const params = new URLSearchParams({
    place_id: placeIdToUse,
    fields: "reviews,rating",
    language: "pt-BR",
    reviews_sort: "newest",
    key: keyToUse,
  });

  try {
    const res = await fetch(`${PLACES_DETAILS_URL}?${params.toString()}`, {
      next: { revalidate: 3600 },
    });
    const data = await res.json();

    if (data.status !== "OK" && data.status !== "ZERO_RESULTS") {
      return NextResponse.json(
        { reviews: [], error: data.error_message ?? data.status },
        { status: 502 }
      );
    }

    const rawReviews: GooglePlaceReview[] = data.result?.reviews ?? [];
    const hasText = (r: GooglePlaceReview) => (r.text ?? "").trim().length > 0;
    const filtered = rawReviews.filter(hasText);
    const reviews: ReviewsResponse["reviews"] = filtered.slice(0, 10).map((r) => ({
      name: r.author_name,
      rating: r.rating ?? 5,
      text: r.text!.trim(),
      avatar: r.profile_photo_url ?? "/logo.png",
    }));

    return NextResponse.json({ reviews });
  } catch (err) {
    console.error("[api/reviews]", err);
    return NextResponse.json(
      { reviews: [], error: err instanceof Error ? err.message : "Erro ao buscar avaliações" },
      { status: 502 }
    );
  }
}
