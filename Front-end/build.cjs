const { exec } = require('child_process');
const fs = require('fs/promises');

async function build() {
  try {
    // Remove the existing backend build folder
    await fs.rm('../Back-end/build', { recursive: true, force: true });

    // Run Vite build command
    const viteBuild = exec('npm run build');

    viteBuild.stderr.on('data', (data) => {
      console.error(`Error: ${data}`);
    });

    viteBuild.on('close', async (code) => {
      if (code === 0) {
        // Copy the Vite build output to the backend folder
        await fs.copyFile('./dist', '../Back-end/build');
        console.log('Build successful!');
      } else {
        console.error('Build failed.');
      }
    });
  } catch (err) {
    console.error('Error during build:', err);
  }
}

build();
