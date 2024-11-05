// Toast plugin for showing notifications
export default function setupToast(app) {
  app.config.globalProperties.$toast = function (message) {
    alert(message); // Simple alert as a placeholder for a toast message
  };
}
