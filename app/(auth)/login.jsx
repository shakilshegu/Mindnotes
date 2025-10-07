import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';

import Button from '../components/ui/Button';
import Colors from '../../constants/Colors';
import Input from '../components/auth/Input';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleLogin = async () => {
        if (!validateForm()) return;

        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            // Navigate to home after successful login
            router.replace('/(tabs)');
        }, 1500);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    showsVerticalScrollIndicator={false}
                >
                    <View className="flex-1 px-6 pt-12">
                        {/* Header */}
                        <View className="mb-12">
                            <Text className="text-4xl font-bold mb-2" style={{ color: Colors.black }}>
                                Welcome Back
                            </Text>
                            <Text className="text-base" style={{ color: Colors.darkGray }}>
                                Sign in to continue your journey
                            </Text>
                        </View>

                        {/* Form */}
                        <View className="mb-6">
                            <Input
                                label="Email"
                                value={email}
                                onChangeText={setEmail}
                                placeholder="Enter your email"
                                keyboardType="email-address"
                                error={errors.email}
                            />

                            <Input
                                label="Password"
                                value={password}
                                onChangeText={setPassword}
                                placeholder="Enter your password"
                                secureTextEntry
                                error={errors.password}
                            />

                            <TouchableOpacity className="self-end mb-6">
                                <Text className="text-sm font-semibold" style={{ color: Colors.black }}>
                                    Forgot Password?
                                </Text>
                            </TouchableOpacity>

                            <Button
                                title={loading ? 'Signing In...' : 'Sign In'}
                                onPress={handleLogin}
                                disabled={loading}
                            />
                        </View>

                        {/* Divider */}
                        <View className="flex-row items-center my-6">
                            <View className="flex-1 h-px" style={{ backgroundColor: Colors.darkGray }} />
                            <Text className="mx-4" style={{ color: Colors.darkGray }}>OR</Text>
                            <View className="flex-1 h-px" style={{ backgroundColor: Colors.darkGray }} />
                        </View>

                        {/* Social Login */}
                        <View className="mb-6">
                            <Button
                                title="Continue with Google"
                                variant="secondary"
                                onPress={() => { }}
                            />
                        </View>

                        {/* Sign Up Link */}
                        <View className="flex-row justify-center items-center mt-4">
                            <Text style={{ color: Colors.darkGray }}>Don't have an account? </Text>
                            <Link href="/signup" asChild>
                                <TouchableOpacity>
                                    <Text className="font-bold" style={{ color: Colors.black }}>
                                        Sign Up
                                    </Text>
                                </TouchableOpacity>
                            </Link>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}