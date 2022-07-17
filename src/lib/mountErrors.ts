import type { AxiosError } from 'axios'

export function mountErrors(errorObject: AxiosError): string[] {
  try {
    if (errorObject.response?.data) {
      const errorData = errorObject.response.data as { errors: Record<string, string[]> }
      return Object.values(errorData.errors).flat()
    }
    else {
      return ['Unknown error. Please retry later.']
    }
  }
  catch (e) {
    return ['Unknown error. Please retry later.']
  }
}
