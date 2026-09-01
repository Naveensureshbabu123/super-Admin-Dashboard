import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addUser } from "../api/userApi";

function RegisterUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const mutation = useMutation({
    mutationFn: addUser,
  });

  const handleRegister = () => {
    const newUser = {
      id: Date.now(),
      name: name,
      email: email,
    };

    mutation.mutate(newUser);
  };

  return (
    <div>
      <h1>Register User</h1>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <button
        onClick={handleRegister}
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "Registering..." : "Register"}
      </button>

      {mutation.isSuccess && (
        <p>User registered successfully!</p>
      )}

      {mutation.isError && (
        <p>Registration failed.</p>
      )}
    </div>
  );
}

export default RegisterUser;