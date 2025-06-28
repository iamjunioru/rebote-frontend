/**
 * @fileoverview Mocks for video generation simulation.
 */

export interface MockVideoResult {
  success: boolean;
  url?: string;
  poster?: string;
}

/**
 * Simulates the process of generating a video replay.
 * This is an asynchronous function that resolves after a delay.
 * In this mock, it always succeeds to demonstrate the happy path.
 *
 * @returns A promise that resolves to an object with a `success` boolean
 *          and the `url` and `poster` for the generated video.
 */
export const generateMockVideo = (): Promise<MockVideoResult> => {
  return new Promise((resolve) => {
    // simulate network/processing delay
    setTimeout(() => {
      resolve({ 
        success: true, 
        url: 'https://placehold.co/1280x720.mp4',
        poster: 'https://placehold.co/1280x720.png',
      });
    }, 2500); // 2.5 second delay
  });
};
