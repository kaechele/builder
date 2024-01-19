<script>
  import { browser } from '$app/environment';
  import { registerProcessors } from '$lib/index.js';
  import './reset.css';

  if (browser) {
    import('../lib/compiler/processors.js').then(({ html, css }) => {
      registerProcessors({ html, css });
    });
  }
</script>

<slot />
