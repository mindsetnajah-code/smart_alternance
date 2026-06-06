export type ApplicationData = {
  nom: string
  niveau: string
  telephone: string
  telephoneParent: string
  email: string
  filiere: string
}

function escapePdfText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’‘]/g, "'")
    .replace(/€/g, "EUR")
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)")
}

function formatLevel(level: string) {
  const labels: Record<string, string> = {
    bepc: "BEPC",
    bac: "BAC",
    libre: "Candidat libre",
    licence: "Licence",
    master: "Master",
  }

  return labels[level] ?? level
}

function formatField(label: string, value: string) {
  return `${label}: ${value.trim() || "Non renseigné"}`
}

export function buildApplicationPdf(data: ApplicationData) {
  const createdAt = new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date())

  const lines = [
    "Dossier d'inscription Smart Alternance",
    "",
    formatField("Nom complet", data.nom),
    formatField("Niveau", formatLevel(data.niveau)),
    formatField("Téléphone", data.telephone),
    formatField("Téléphone parent", data.telephoneParent),
    formatField("Email", data.email),
    formatField("Filière", data.filiere),
    "",
    `Date de soumission: ${createdAt}`,
  ]

  let currentY = 770
  const commands = lines.map((line, index) => {
    const fontSize = index === 0 ? 18 : 12
    const command = `BT /F1 ${fontSize} Tf 56 ${currentY} Td (${escapePdfText(line)}) Tj ET`
    currentY -= index === 0 ? 30 : 22
    return command
  })

  const stream = commands.join("\n")
  const objects = [
    "1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj",
    "2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj",
    "3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >> endobj",
    `4 0 obj << /Length ${stream.length} >> stream\n${stream}\nendstream endobj`,
    "5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj",
  ]

  let pdf = "%PDF-1.4\n"
  const offsets = [0]

  for (const object of objects) {
    offsets.push(pdf.length)
    pdf += `${object}\n`
  }

  const xrefOffset = pdf.length
  pdf += `xref\n0 ${objects.length + 1}\n`
  pdf += "0000000000 65535 f \n"

  for (let index = 1; index < offsets.length; index += 1) {
    pdf += `${offsets[index].toString().padStart(10, "0")} 00000 n \n`
  }

  pdf += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`

  return new Blob([pdf], { type: "application/pdf" })
}
