export const formatDate = (
  date: string,
  language: Intl.LocalesArgument = 'pt-BR',
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
) => {
  return new Date(date).toLocaleDateString(language, options)
}
