import { Button, Input, Form, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import style from "./style";
import "./reformat.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate =useNavigate()
	const onFinish = (values: any) => {
		console.log("Received values of form: ", values);
		navigate('/operation')
	};
	return (
		<div style={style.loginWrapper}>
			<div style={style.leftWrapper}>
			</div>
			<div id="components-form-demo-normal-login" style={style.rightWrapper}>
				<Form
					name="normal_login"
					className="login-form"
					wrapperCol={{ span: 16 }}
					initialValues={{ remember: true }}
					onFinish={onFinish}
					autoComplete="off"
				>
					<Form.Item
						name="username"
						rules={[{ required: true, message: "Please input your Username!" }]}
					>
						<Input
							prefix={<UserOutlined className="site-form-item-icon" />}
							placeholder="Username"
						/>
					</Form.Item>
					<Form.Item
						name="password"
						rules={[{ required: true, message: "Please input your Password!" }]}
					>
						<Input
							prefix={<LockOutlined className="site-form-item-icon" />}
							type="password"
							placeholder="Password"
						/>
					</Form.Item>
					<Form.Item>
						<Form.Item name="remember" valuePropName="checked" noStyle>
							<Checkbox>Remember me</Checkbox>
						</Form.Item>

						<a className="login-form-forgot" href="">
							Forgot password
						</a>
					</Form.Item>

					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							className="login-form-button"
						>
							Log in
						</Button>
						Or <a href="">register now!</a>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default Login;
