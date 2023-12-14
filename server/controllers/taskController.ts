import { Request, Response } from "express";

exports.getTask = (req: Request, res: Response) => {
	res.status(200).json({
		status: "success",
		message: "These are the tasks",
	});
};

exports.addTask = (req: Request, res: Response) => {
	res.status(200).json({
		status: "success",
		message: "User Made",
	});
};
