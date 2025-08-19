export function formatDate(isoDate) {
    const date = new Date(isoDate);

    return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Paris"
    }).format(date);
}
