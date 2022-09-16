export const exportSCV: (csv: string, fileName: string) => void
  = (csv: string, fileName: string) => {
  const blob = new Blob([csv], {type: 'text/csv'});
  const url = URL.createObjectURL(blob);
  const dow = document.createElement('a');
  dow.download = fileName;
  dow.href = url;
  dow.click();
};
