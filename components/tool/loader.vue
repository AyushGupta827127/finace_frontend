<template>
  <div class="loader">
    <div class="logo-container">
      <img src="@/assets/img/misc/logo_init.png" alt="Company Logo" class="logo-image"/>
      <div class="color-overlay"></div>
    </div>
  </div>
</template>

<style scoped>
.loader {
  @apply fixed inset-0 flex items-center justify-center bg-gray-50 z-[9999];
  overflow: hidden; /* Ensure no overflow from animations */
}

.logo-container {
  position: relative;
  @apply w-32 h-32; /* Adjust size as needed */
}

.logo-image {
  @apply w-full h-full;
}

.color-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(249, 115, 22, 0.6); /* Semi-transparent color */
  opacity: 0;
  transform: scale(1.5); /* Start slightly larger */
  border-radius: 50%; /* Circular overlay */
  transition: opacity 1s ease, transform 1s ease; /* Animate opacity and scale */
  z-index: 1; /* Ensure overlay is on top */
}

/* Pulse animation */
@keyframes pulse {
  0% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
  100% {
    opacity: 0.6;
    transform: scale(1);
  }
}

/* Apply pulse effect continuously */
.loader .logo-image {
  animation: pulse 2s infinite;
}
</style>
