declare const loadTomlFile: {
  /**
   * Read and parse a TOML file.
   *
   * Strips UTF-8 BOM and uses graceful-fs.
   */
  (filePath: string): Promise<Record<string, any>>

  /**
   * Read and parse a TOML file.
   *
   * Strips UTF-8 BOM and uses graceful-fs.
   */
  sync (filePath: string): Record<string, any>
}

export = loadTomlFile
