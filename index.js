export default async function handler(req, res) {
  try {
    const response = await fetch("https://nadzira-load-test.glitch.me/100kb");
    const data = await response.json();

    // Kirim data ke client
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Gagal fetch data" });
  }
}
