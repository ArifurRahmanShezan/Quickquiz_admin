"use client";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [add, setAdd] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);

  // Error states
  const [nameError, setNameError] = useState("");
  const [unameError, setUnameError] = useState("");
  const [passError, setPassError] = useState("");
  const [confirmPassError, setConfirmPassError] = useState("");
  const [addError, setAddError] = useState("");
  const [photoError, setPhotoError] = useState("");

  // Show/Hide password
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  function validateForm() {
    let valid = true;

    setNameError("");
    setUnameError("");
    setPassError("");
    setConfirmPassError("");
    setAddError("");
    setPhotoError("");

    const nameRegex = /^[A-Za-z ]+$/;
    const passRegex = /[@#$&]/;

    if (!name.trim()) {
      setNameError("Name is required.");
      valid = false;
    } else if (!nameRegex.test(name)) {
      setNameError("Name must not contain numbers or special characters.");
      valid = false;
    }

    if (!uname.trim()) {
      setUnameError("Username is required.");
      valid = false;
    }

    if (!pass.trim()) {
      setPassError("Password is required.");
      valid = false;
    } else if (!passRegex.test(pass)) {
      setPassError("Password must contain at least one of @ # $ &.");
      valid = false;
    }

    if (!confirmPass.trim()) {
      setConfirmPassError("Please confirm your password.");
      valid = false;
    } else if (pass !== confirmPass) {
      setConfirmPassError("Passwords do not match.");
      valid = false;
    }

    if (!add.trim()) {
      setAddError("Address is required.");
      valid = false;
    }

    if (!photo) {
      setPhotoError("Profile picture is required.");
      valid = false;
    }

    return valid;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("uname", uname);
      formData.append("pass", pass);
      formData.append("add", add);
      if (photo) formData.append("file", photo);

      const response = await axios.post(
        "http://localhost:3000/admin/addAdminnew",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      alert("Signup successful ");

      // Reset form
      setName("");
      setUname("");
      setPass("");
      setConfirmPass("");
      setAdd("");
      setPhoto(null);
      setShowPass(false);
      setShowConfirmPass(false);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || error.message;
        alert("Signup failed  " + errorMessage);
      } else {
        alert("Something went wrong! Please try again.");
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {nameError && <p>{nameError}</p>}
              </td>
            </tr>

            <tr>
              <td>Username:</td>
              <td>
                <input
                  type="text"
                  name="uname"
                  value={uname}
                  onChange={(e) => setUname(e.target.value)}
                />
                {unameError && <p>{unameError}</p>}
              </td>
            </tr>

            <tr>
              <td>Password:</td>
              <td>
                <input
                  type={showPass ? "text" : "password"}
                  name="pass"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
                <button type="button" onClick={() => setShowPass(!showPass)}>
                  {showPass ? "Hide" : "Show"}
                </button>
                {passError && <p>{passError}</p>}
              </td>
            </tr>

            <tr>
              <td>Confirm Password:</td>
              <td>
                <input
                  type={showConfirmPass ? "text" : "password"}
                  name="confirmPass"
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPass(!showConfirmPass)}
                >
                  {showConfirmPass ? "Hide" : "Show"}
                </button>
                {confirmPassError && <p>{confirmPassError}</p>}
              </td>
            </tr>

            <tr>
              <td>Address:</td>
              <td>
                <input
                  type="text"
                  name="add"
                  value={add}
                  onChange={(e) => setAdd(e.target.value)}
                />
                {addError && <p>{addError}</p>}
              </td>
            </tr>

            <tr>
              <td>Profile Picture:</td>
              <td>
                <input
                  type="file"
                  name="photo"
                  onChange={(e) =>
                    setPhoto(e.target.files ? e.target.files[0] : null)
                  }
                />
                {photoError && <p>{photoError}</p>}
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <button type="submit">Signup</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <br />
      <Link href="/homepage/login">
        <button>Already have an account? Login</button>
      </Link>
    </>
  );
}
