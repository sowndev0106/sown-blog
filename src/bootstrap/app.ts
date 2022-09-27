import 'express-async-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import routes from '@modules/routes';
import '@modules/@core/infrastructure/mongoose';

const app = express();

app.use(cors());
//app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/public", express.static("public"));



app.set("view engine", "ejs");
app.set("views", ["src/presentation"]);

app.set("trust proxy", 1);

// Show routes called in console during development
if (process.env.NODE_ENV !== 'production') {
	app.use(morgan('dev'));
}

// Security
app.use(
	helmet({
		contentSecurityPolicy: false,
	})
);

app.use(routes);

export default app;
