import { server, app, messages } from "./server";
const port = process.env.PORT || 3000
app.listen(port, messages);


