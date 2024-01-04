```swift
import SwiftUI

struct UserView: View {
    @State private var username: String = ""
    @State private var email: String = ""
    @State private var password: String = ""
    @State private var users: [User] = []

    var body: some View {
        VStack {
            Text("Users")
                .font(.largeTitle)
            Form {
                Section(header: Text("Create User")) {
                    TextField("Username", text: $username)
                    TextField("Email", text: $email)
                    SecureField("Password", text: $password)
                    Button(action: {
                        self.createUser()
                    }) {
                        Text("Create User")
                    }
                }
                Section(header: Text("User List")) {
                    List(users) { user in
                        VStack(alignment: .leading) {
                            Text(user.username)
                                .font(.headline)
                            Text("Email: \(user.email)")
                            Text("Progress: \(user.progress)")
                        }
                    }
                }
            }
        }
        .onAppear(perform: fetchUsers)
    }

    func createUser() {
        // Implement the API call to create a user using the username, email, and password
        // After successful creation, call fetchUsers() to update the list
    }

    func fetchUsers() {
        // Implement the API call to fetch users
        // Update the users state variable with the fetched users
    }
}

struct User: Identifiable {
    var id: String
    var username: String
    var email: String
    var progress: String
}

struct UserView_Previews: PreviewProvider {
    static var previews: some View {
        UserView()
    }
}
```
