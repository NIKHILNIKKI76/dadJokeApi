let url = "https://icanhazdadjoke.com/slack";

const label = document.getElementById("label");
const button = document.getElementById("button");

button.addEventListener("click", getJoke);

async function getJoke() {
    try {
        let response = await axios.get(url, { headers: { Accept: "application/json" } });
        label.innerHTML = response.data.attachments[0].text;
    } catch (error) {
        console.error("An error occurred:", error.message);
        // Handle the error or throw it again if needed
    }
}
