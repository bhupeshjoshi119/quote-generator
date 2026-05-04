const BASE_URL = 'https://api.freeapi.app/api/v1/public/quotes'

/**
 * Fetches a page of quotes from the FreeAPI.
 * @param {number} page - Page number to fetch
 * @param {number} limit - Number of quotes per page
 * @returns {Promise<{ data: Array, totalPages: number, page: number }>}
 */
export async function fetchQuotes(page = 1, limit = 10) {
  const response = await fetch(`${BASE_URL}?page=${page}&limit=${limit}`)

  if (!response.ok) {
    throw new Error(`Failed to fetch quotes (HTTP ${response.status})`)
  }

  const json = await response.json()

  if (!json.success) {
    throw new Error(json.message || 'Unknown API error')
  }

  return {
    data: json.data.data,
    totalPages: json.data.totalPages,
    page: json.data.page,
    totalItems: json.data.totalItems,
  }
}
