(function () {
  const WIDGET_URL = "http://localhost:5173";

  const button = document.createElement("button");
  button.innerHTML = "💬";
  button.setAttribute("aria-label", "Abrir widget BonifiQ");

  Object.assign(button.style, {
    position: "fixed",
    right: "20px",
    bottom: "20px",
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    border: "none",
    background: "linear-gradient(90deg, #8849F9 0%, #4DCCF8 100%)",
    color: "#fff",
    fontSize: "24px",
    cursor: "pointer",
    zIndex: "999999",
    boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
  });

  const iframe = document.createElement("iframe");
  iframe.src = WIDGET_URL;
  iframe.title = "BonifiQ Widget";

  Object.assign(iframe.style, {
    position: "fixed",
    right: "20px",
    bottom: "88px",
    width: "320px",
    maxWidth: "calc(100vw - 40px)",
    height: "600px",
    maxHeight: "calc(100vh - 120px)",
    border: "none",
    borderRadius: "16px",
    boxShadow: "0 12px 32px rgba(0,0,0,0.28)",
    zIndex: "999999",
    display: "none",
    background: "#fff",
  });

  button.addEventListener("click", () => {
    const isOpen = iframe.style.display === "block";
    iframe.style.display = isOpen ? "none" : "block";
    button.innerHTML = isOpen ? "💬" : "×";
  });

  window.addEventListener("message", (event) => {
    if (event.data?.type === "BONIFIQ_CLOSE_WIDGET") {
      iframe.style.display = "none";
      button.innerHTML = "💬";
    }

    if (event.data?.type === "BONIFIQ_GET_LOGGED_USER_ID") {
      iframe.contentWindow?.postMessage(
        {
          type: "BONIFIQ_LOGGED_USER_ID",
          payload: window.loggedUserId,
        },
        "*",
      );
    }
  });

  document.body.appendChild(iframe);
  document.body.appendChild(button);
})();
