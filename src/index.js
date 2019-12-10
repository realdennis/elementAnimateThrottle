const animateThrottleInstall = el => {
    let animateObj = null;
    const isPlaying = () =>
      (animateObj && animateObj.playState === "running") || false;
    el.animateThrottle = function() {
      if (isPlaying()) {
        return;
      }
      animateObj = Element.prototype.animate.apply(this, arguments);
      return animateObj;
    };
  };
export default animateThrottleInstall;