<!DOCTYPE html>
<html>
<script src="vue.js"></script>
<body>

<div id="app">
  <h1>{{ message }}</h1>
  
<h4>User</h4>
<div>
    <table>
        <tr>
            <th><input type="checkbox" v-model="selectAll"></th>
            <th align="left">Name</th>
        </tr>
        <tr v-for="user in users">
            <td>
                <input type="checkbox" v-model="selected" :value="user.id" number>
            </td>
            <td>{{ user.name }}</td>
        </tr>
    </table>
</div>
<hr />
<h2>Check Option </h2>
<input type="checkbox" v-model="optionAll" /> All <br />
<input type="checkbox" v-model="check_option"  name ="check_option[]" value="a" /> Option A <br />
<input type="checkbox" v-model="check_option"  name ="check_option[]" value="b" /> Option B <br />
<input type="checkbox" v-model="check_option"  name ="check_option[]" value="c" /> Option C <br />
<input type="checkbox" v-model="check_option"  name ="check_option[]" value="d" /> Option D <br />
  <span>Checked names: {{ check_option }}</span>
</div>
<script src="vue_custom.js"></script>

</body>
</html>
