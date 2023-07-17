import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Task } from "../../components/task";
import { TaskInput } from "../../components/taskinput";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}

      <Header></Header>

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}

        <TaskInput></TaskInput>

        {/* task */}

        <Task title="Read a book"></Task>

        {/* task */}

        <Task title="Take a shower"></Task>
        {/* task */}

        <Task title="Sleep"></Task>
      </div>

      {/* //footer section */}

      <Footer
        year="2023" 
        fullName="Thanawat Jaisert"
        studentId="650610678"
      ></Footer>
    </div>
  );
}
