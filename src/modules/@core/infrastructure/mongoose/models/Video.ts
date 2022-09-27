import mongoose from 'mongoose';

export default mongoose.model(
	'videos',
	new mongoose.Schema(
		{
			channelId: String,
            publishedAt: String,
            title: String,
            description: String,
            url: String,
            videoId:String,
            thumbnailUtl:String,
			createdDate: { type: Date, required: false },
			updatedDate: { type: Date, required: false, default: Date.now() },
		},
		{
			strict: false,
		}
	)
);
