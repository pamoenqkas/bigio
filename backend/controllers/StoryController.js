import Story from "../models/StoryModel.js";
import path from "path";
import fs from "fs";

export const getStorys = async (req, res) => {
  try {
    const response = await Story.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getChapters = async (req, res) => {
  try {
    const response = await Chapters.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getStoryById = async (req, res) => {
  try {
    const response = await Story.findOne({
      where: {
        id_story: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const saveStory = async (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const synopsis = req.body.synopsis;
  const category = req.body.category;
  const tags = req.body.tags;
  const status = req.body.status;

  // Check if the 'file' property exists in req.files
  const file = req.files ? req.files.file : null;

  // If file exists, proceed with processing
  if (file) {
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase())) {
      return res.status(422).json({ msg: "Invalid Images" });
    }

    if (fileSize > 5000000) {
      return res.status(422).json({ msg: "Image must be less than 5 MB" });
    }

    file.mv(`./public/images/${fileName}`, async (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ msg: "Internal Server Error" });
      }

      try {
        await Story.create({
          title: title,
          author: author,
          synopsis: synopsis,
          category: category,
          tags: tags,
          status: status,
          image: fileName,
          url: url,
        });
        res.status(201).json({ msg: "Story Created Successfully" });
      } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Internal Server Error" });
      }
    });
  } else {
    // If file is not present, create the story without the file
    try {
      await Story.create({
        title: title,
        author: author,
        synopsis: synopsis,
        category: category,
        tags: tags,
        status: status,
      });
      res.status(201).json({ msg: "Story Created Successfully" });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }
};

export const updateStory = async (req, res) => {
  const story = await Story.findOne({
    where: {
      id_story: req.params.id,
    },
  });

  if (!story) return res.status(404).json({ msg: "No Data Found" });

  let fileName = "";

  if (req.files !== null) {
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))
      return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 5000000)
      return res.status(422).json({ msg: "Image must be less than 5 MB" });

    const filepath = `./public/images/${story.image}`;

    // Check if story.image is defined before unlinking
    if (story.image) {
      fs.unlinkSync(filepath);
    }

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }

  const title = req.body.title;
  const author = req.body.author;
  const synopsis = req.body.synopsis;
  const status = req.body.status;
  const tags = req.body.tags;
  const category = req.body.category;
  const url = fileName
    ? `${req.protocol}://${req.get("host")}/images/${fileName}`
    : story.url; 

  try {
    await Story.update(
      {
        title: title,
        author: author,
        synopsis: synopsis,
        category: category,
        tags: tags,
        status: status,
        cover: fileName,
        url: url,
      },
      {
        where: {
          id_story: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Story Updated Successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const deleteStory = async (req, res) => {
  const story = await Story.findOne({
    where: {
      id_story: req.params.id,
    },
  });
  if (!story) return res.status(404).json({ msg: "No Data Found" });

  try {
    const filepath = `./public/images/${story.image}`;
    fs.unlinkSync(filepath);
    await Story.destroy({
      where: {
        id_story: req.params.id,
      },
    });
    res.status(200).json({ msg: "Story Deleted Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};
