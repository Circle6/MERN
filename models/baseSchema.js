import mongoose from 'mongoose';
import {Schema} from 'mongoose';

const baseSchema = new Schema({
	_id: Schema.ObjectId
});

mongoose.model('Chat', baseSchema);
