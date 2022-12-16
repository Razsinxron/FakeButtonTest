const Y_POSITIONS = [
    "350px",
    "175px",
    "0px",
    "350px",
    "0px",
    "175px",
    "350px",
    "0px",
  ];

  const X_POSITIONS = [
    "0px",
    "470px",
    "0px",
    "235px",
    "470px",
    "0px",
    "470px",
    "235px",
  ];

  let idx = 0;

  document.querySelector(".answer_n").onmouseover = handleMouseoverButton;

  function handleMouseoverButton(event) {
    let flash_button = event.target;

    flash_button.style.top = Y_POSITIONS[idx];
    flash_button.style.left = X_POSITIONS[idx];

    idx++;

    if (idx > 7) idx = 0;
  }