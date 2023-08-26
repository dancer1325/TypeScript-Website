


//                            --    PARTIAL    --

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

// fieldsToUpdate     is Partial<>  -> You can pass just any property that you want
const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});


//                            --    RECORD    --

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

const boris = cats.boris;

// Get access to the values
console.log('boris.age ' + boris.age + ' boris.breed ' + boris.breed);


