const axios = require("axios");
const fs = require("fs");

function updatePosts() {
  const filePath = "README.md";

  axios.get("https://blog.albingroen.com/posts.json").then((res) => {
    const lines = DEFAULT_CONTENT.trim().split("\n");

    res.data.forEach((post) => {
      lines.push(`\n- [${post.title}](${post.link})`);
    });

    const newContent = lines.join("\n");

    fs.writeFileSync(filePath, newContent);

    console.log("Done!");
  });
}

const DEFAULT_CONTENT = `Nice to meet you. Here are some links where you can read more about me and the work I do. &darr;

- [Website](https://albingroen.com)
- [Portfolio](https://portfolio.albingroen.com)
- [Blog](https://blog.albingroen.com)

## Blog posts`;

updatePosts();
