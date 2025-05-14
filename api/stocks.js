export default async function handler(req, res) {
  const url = 'https://raw.githubusercontent.com/Drednine/ozon-stock-anastasia/main/ozon-stock-feed.xml'; // ← ЗАМЕНИ

  const response = await fetch(url);
  if (!response.ok) {
    res.status(500).send("GitHub fetch failed");
    return;
  }

  const xml = await response.text();
  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(xml);
}
