const handleFileChange = async (e) => {
  const formData = new FormData();
  formData.append("image", e.target.files[0]);

  const res = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  console.log("Uploaded Image URL:", data.url);
};
