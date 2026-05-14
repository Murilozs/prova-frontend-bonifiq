/**
 * Widget embutível responsável por:
 * - Criar botão flutuante
 * - Abrir/fechar iframe
 * - Enviar loggedUserId para aplicação React
 * - Receber eventos de fechamento via postMessage
 */
(function () {
  const WIDGET_URL = "http://localhost:5173";

  let isOpen = false;

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
    transition: "all 0.25s ease",
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
    background: "#fff",
    overflow: "hidden",
    transition: "all 0.25s ease",
    opacity: "0",
    visibility: "hidden",
    transform: "translateY(20px)",
  });

  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.08)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });

  function openWidget() {
    isOpen = true;
    iframe.style.opacity = "1";
    iframe.style.visibility = "visible";
    iframe.style.transform = "translateY(0)";
    button.innerHTML = "×";
  }

  function closeWidget() {
    isOpen = false;
    iframe.style.opacity = "0";
    iframe.style.visibility = "hidden";
    iframe.style.transform = "translateY(20px)";
    button.innerHTML = "💬";
  }

  button.addEventListener("click", () => {
    if (isOpen) {
      closeWidget();
    } else {
      openWidget();
    }
  });

  window.addEventListener("message", (event) => {
    if (event.data?.type === "BONIFIQ_CLOSE_WIDGET") {
      closeWidget();
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
