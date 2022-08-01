import Teacher from '../models/Teacher';

export async function createTeacher(data) {
  try {
    return await Teacher.create(data);
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

export async function getAllTeachers({ populateBy }) {
  try {
    if (!populateBy) {
      return await Teacher.find({}).exec();
    }

    return await Teacher.find({}).populate(populateBy).exec();
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

export async function getOneById({ id, populateBy }) {
  try {
    if (!populateBy) {
      return await Teacher.findById(id).exec();
    }

    return await Teacher.findById(id).populate(populateBy).exec();
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}
