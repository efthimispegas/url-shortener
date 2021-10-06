const loadingAnimationTime = 1200;

const showMainAnimation = (parent: any) => {
  const boxContainer = document.createElement('div');
  boxContainer.style.overflow = 'hidden';
  const box = document.createElement('div');
  box.classList.add('box', 'flex');
  parent.appendChild(boxContainer);
  boxContainer.appendChild(box);
  const quote = ['Simplest', 'way', 'to', 'shorten', 'your', 'urls', 'in', 'seconds'];
  let delay = 0;
  // Add all the words
  quote.forEach((word) => {
    const text = document.createElement('h1');
    text.textContent = word;
    text.classList.add('animate-slideup');
    delay += 22;
    text.style.animationDelay = `${delay} ms`;
    box.appendChild(text);
  });
  const lastAnimationTime = 1000 + delay; // in ms
  // Add full stop
  setTimeout(() => {
    const text = document.createElement('div');
    text.classList.add('fs', 'flex');
    text.style.animationDelay = `${lastAnimationTime + 100} ms`;
    box.appendChild(text);
  }, 750);
};

const revealCurtain = (parent: any) => {
  const curtain = document.createElement('div');
  curtain.classList.add('flex', 'curtain');
  parent.appendChild(curtain);
  const progressBar = document.createElement('div');
  progressBar.classList.add('progressBar');
  curtain.appendChild(progressBar);
  progressBar.classList.add('progressGrow-animation');
  return curtain;
};

export const initialize = async () => {
  const container = document.getElementById('animation');
  const curtain = revealCurtain(container);
  const res = setTimeout(() => {
    container?.removeChild(curtain);
    showMainAnimation(container);
    return true;
  }, loadingAnimationTime);
};
