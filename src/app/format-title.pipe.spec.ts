import { FormatTitlePipe } from './format-title.pipe';

describe('FormatTitlePipe', () => {
  let pipe: FormatTitlePipe;

  beforeEach(() => {
    pipe = new FormatTitlePipe();
  });

  it('should format text into title case', () => {
    expect(pipe.transform('welcome to angular')).toBe('Welcome To Angular');
  });

  it('should return an empty string for empty values', () => {
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform('')).toBe('');
  });
});
