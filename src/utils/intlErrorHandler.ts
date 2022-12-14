import { IntlError, IntlErrorCode } from 'next-intl'

export const intlErrorHandler = (error: IntlError) => {
  // prevent displaying `MISSING_MESSAGE` errors
  // for more info: https://github.com/amannn/next-intl/issues/32
  if (error.code !== IntlErrorCode.MISSING_MESSAGE) {
    console.error(error)
  }
}
