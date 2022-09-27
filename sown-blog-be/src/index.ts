import '@bootstrap/index'; // Must be the first import
import app from '@bootstrap/app';
// Start the server
const port = Number(process.env.PORT || 3000);

app.listen(port, () => {
	console.log(`Express server started on ${process.env.BASE_URL}`);
});
