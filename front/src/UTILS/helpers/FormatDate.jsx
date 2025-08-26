export function formatDate(isoDate) {
    if (!isoDate) return "Date invalide";
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
