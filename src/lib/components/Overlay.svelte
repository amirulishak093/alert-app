<script>
     export let isOpen = false;
  </script>
  
  <div class="fixed inset-0 flex items-center justify-center z-[9999] { isOpen ? 'block' : 'hidden'}">
    <div class="fixed inset-0 bg-black opacity-50"></div>
      <slot></slot>
  </div>