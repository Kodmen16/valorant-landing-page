(() => {
  const route = () => location.hash.replace(/^#\/?/, '').split('/')[0] || '';
  const app = () => document.querySelector('#app');

  function renderTacticsSafely() {
    if (route() !== 'tactics' || typeof window.tacticsPage !== 'function') return;
    const root = app();
    if (!root) return;
    root.innerHTML = window.tacticsPage();
    document.querySelectorAll('[data-tactic-mode]').forEach(button => {
      button.addEventListener('click', event => {
        event.preventDefault();
        window.tacticsMode = button.dataset.tacticMode;
        window.tacticsSelected = 0;
        renderTacticsSafely();
      });
    });
    document.querySelectorAll('[data-tactic-index]').forEach(button => {
      button.addEventListener('click', event => {
        event.preventDefault();
        window.tacticsSelected = Number(button.dataset.tacticIndex);
        renderTacticsSafely();
      });
    });
  }

  window.renderTacticsPage = renderTacticsSafely;
  window.addEventListener('hashchange', () => setTimeout(renderTacticsSafely, 0));
  window.addEventListener('load', () => setTimeout(renderTacticsSafely, 0));
  document.addEventListener('DOMContentLoaded', () => setTimeout(renderTacticsSafely, 0));
})();
