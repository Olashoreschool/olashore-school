const getFileNameFromGoogleDriveLink = async (googleDriveLink: string) => {
  try {
    const parts = googleDriveLink.split("/");
    const fileId = parts[parts.length - 2];

    const metadataUrl = `https://www.googleapis.com/drive/v3/files/${fileId}?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`;

    const response = await fetch(metadataUrl);
    const data = await response.json();
    const filename = data.name;

    return filename;
  } catch (error) {
    console.error("Error fetching metadata:", error);
    throw error;
  }
};

export default getFileNameFromGoogleDriveLink;
