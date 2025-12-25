import { env } from "./env"
import { app } from "./app.js";

const PORT = env.PORT || 3000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
