"use server";
import path from "path";
import { writeFile } from "fs/promises";

export async function writeMessage(
    prevState: {
        message: string;
      },
      formData: FormData,
  ) {
    const filePath = path.join(
        process.cwd(),
        "app/_data/message",
        "object.json",
    );

    await writeFile(filePath, JSON.stringify(formData.get("message")));

    return { message: "Message written successfully" };
  }
  
