/**
 * @fileoverview Mocks for video generation simulation.
 */

export interface MockVideoResult {
  success: boolean;
  url?: string;
  poster?: string;
}

/**
 * Simulates the process of generating a video replay by calling the backend API.
 * This function now integrates with the real backend instead of using static mocks.
 *
 * @returns A promise that resolves to an object with a `success` boolean
 *          and the `url` and `poster` for the generated video.
 */
export const generateMockVideo = (): Promise<MockVideoResult> => {
  return new Promise(async (resolve) => {
    try {
      // Call the backend trigger endpoint
      const response = await fetch('/api/replay/trigger', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.success) {
        resolve({
          success: true,
          url: data.video_url,
          poster: data.poster_url,
        });
      } else {
        resolve({
          success: false,
        });
      }
    } catch (error) {
      console.error('Erro ao chamar o backend:', error);
      // fallback for original mock if backend call fails
      setTimeout(() => {
        resolve({ 
          success: true, 
          url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
          poster: 'https://placehold.co/1280x720/333/fff?text=replay+mock',
        });
      }, 2500);
    }
  });
};
