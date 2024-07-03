![Image](https://github.com/LordKayaba/SaveDataSecurity/blob/Develop/SaveData/Icons/Icon.png)

# Save Data Security
This package is designed for managing data storage
and retrieval in Unity. It contains static methods
that provide functionality for saving, loading,
deleting, and editing data using various
encryption techniques.

## Static Methods:

1. `Exists(string key)`
- Checks if data with a specific key exists.
```csharp
if(SD.Exists("myKey"))
{
    Debug.Log("Data exists!");
}
```

2. `Delete(string key)`
- Deletes data using the specified key.
```csharp
SD.Delete("myKey");
```

3. `EditKey(string CurrentKey, string NewKey)`
- Edits the key of a data entry with a new key.
```csharp
SD.EditKey("oldKey", "newKey");
```

4. `Load<T>(string key)`
- Retrieves data using the key and decrypts it.
```csharp
MyObjectType loadedData = SD.Load<MyObjectType>("myKey");
```

5. `Save<T>(string key, T obj)`
- Saves data using the key and encrypts it.
```csharp
MyObjectType myObject = new MyObjectType();
SD.Save("myKey", myObject);
```
