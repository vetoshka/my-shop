export class LocalStorageService {
  
  setData(key: string, data: any) {
    const jsonData = JSON.stringify(data)
    localStorage.setItem(key, jsonData)
  }

  getData(key: string) : any {
    return localStorage.getItem(key)
  }

  removeData(key: string) {
    localStorage.removeItem(key)
  }
}

export const shopLocalStorage = new LocalStorageService();