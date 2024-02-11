import axios from "axios";
import toast from "react-hot-toast";

export async function loginAuth(data) {
  try {
    const sendData = await axios.post(
      "https://tinytweak.karthikkahil.cloud/api/v1/user/login",
      data,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Submitting....");

    if (sendData.status === 200) {
      const responseJson = sendData.data;
      localStorage.setItem(
        "userData",
        JSON.stringify({
          name: responseJson.data.user.name,
          email: responseJson.data.user.email,
        })
      );
      location.reload(true);
      return responseJson;
    } else {
      throw new Error(`Failed to send data. Status: ${sendData.status}`);
    }
  } catch (error) {
    console.error("Error:", error);
    toast.error(`Provided email and password is incorrect`);
    throw error;
  }
}

export async function loggout() {
  try {
    const sendData = await axios.post(
      "https://tinytweak.karthikkahil.cloud/api/v1/user/logout",
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Submitting....");

    if (sendData.status === 200) {
      const responseJson = sendData.data;
      localStorage.clear("userData");

      location.reload(true);
      return responseJson;
    } else {
      throw new Error(`Failed to send data. Status: ${sendData.status}`);
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function apiCenter(data) {
  try {
    const sendData = await axios.post(
      "https://tinytweak.karthikkahil.cloud/api/v1/client",
      data,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("Submitting....");

    if (sendData.status === 200) {
      const responseJson = sendData.data;
      return responseJson;
    } else {
      throw new Error(`Failed to send data. Status: ${sendData.status}`);
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function uploadImages(images) {
  try {
    const formData = new FormData();
    images.forEach((image) => {
      formData.append("images", image);
    });

    const response = await axios.post(
      "https://tinytweak.karthikkahil.cloud/api/v1/client",
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Image upload failed");
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function signUpAuth(data) {
  try {
    const sendData = await axios.post(
      "https://tinytweak.karthikkahil.cloud/api/v1/user/signup",
      data,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Submitting....");

    if (sendData.status === 201) {
      const responseJson = sendData.data;
      location.reload(true);
      return responseJson;
    } else {
      throw new Error(`Failed to send data. Status: ${sendData.status}`);
    }
  } catch (error) {
    console.error("Error:", error);
    toast.error(`You've already have account on this email`);
    throw error;
  }
}

export async function zipDownloadHandler() {
  try {
    const response = await axios.get(
      "https://tinytweak.karthikkahil.cloud/api/v1/client/download-multiple",
      {
        responseType: "blob",
      }
    );

    const blob = new Blob([response.data], { type: "application/zip" });

    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "bee-ng.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error downloading zip file:", error);
  }
}
