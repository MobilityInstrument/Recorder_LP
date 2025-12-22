'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { BASE_PATH } from './config';

// App Store URL - アプリ公開後にここを更新してください
const APP_STORE_URL = '#'; // 例: 'https://apps.apple.com/jp/app/your-app-id'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image 
              src={`${BASE_PATH}/images/logo.png`} 
              alt="録移音機" 
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-xl font-bold text-gray-900">録移音機</span>
          </div>
          
          {/* デスクトップメニュー */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">About</a>
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">特徴</a>
            <a href="#scenes" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">利用シーン</a>
            <a href="#functions" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">機能</a>
            <a href="#download" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">ダウンロード</a>
          </div>

          {/* モバイルハンバーガーボタン */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="メニュー"
          >
            {mobileMenuOpen ? (
              <i className="ri-close-line text-2xl text-gray-900"></i>
            ) : (
              <i className="ri-menu-line text-2xl text-gray-900"></i>
            )}
          </button>
        </nav>

        {/* モバイルメニュー */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
          }`}
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            <a 
              href="#about" 
              onClick={closeMobileMenu}
              className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer py-2 px-4 hover:bg-gray-50 rounded-lg"
            >
              About
            </a>
            <a 
              href="#features" 
              onClick={closeMobileMenu}
              className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer py-2 px-4 hover:bg-gray-50 rounded-lg"
            >
              特徴
            </a>
            <a 
              href="#scenes" 
              onClick={closeMobileMenu}
              className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer py-2 px-4 hover:bg-gray-50 rounded-lg"
            >
              利用シーン
            </a>
            <a 
              href="#functions" 
              onClick={closeMobileMenu}
              className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer py-2 px-4 hover:bg-gray-50 rounded-lg"
            >
              機能
            </a>
            <a 
              href="#download" 
              onClick={closeMobileMenu}
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors cursor-pointer text-center"
            >
              ダウンロード
            </a>
          </div>
        </div>
      </header>

      <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              音と軌跡を<br />記録する
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              録移音機は、移動経路と音声を同時に記録し、後から再生できるモバイルアプリケーションです。散歩、旅行、フィールドワークの思い出を、音と位置情報で残しましょう。
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={APP_STORE_URL} className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap inline-flex items-center gap-2">
                <i className="ri-apple-fill text-2xl w-6 h-6 flex items-center justify-center"></i>
                App Storeからダウンロード
              </a>
            </div>
          </div>
          <div className="relative w-full aspect-[3/4] md:aspect-auto">
            <Image 
              src={`${BASE_PATH}/images/hero.png`} 
              alt="録移音機アプリ画面" 
              width={600}
              height={800}
              className="w-full h-auto rounded-3xl shadow-2xl object-cover object-top"
              priority
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">録移音機について</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              録移音機（Sound Trajectory Recorder）は、あなたの移動と音声を記録し、思い出を鮮明に残すためのアプリケーションです。
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-smartphone-line text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">iOS対応</h3>
              <p className="text-gray-600 leading-relaxed">
                iPhoneで快適に使用できる、ネイティブアプリケーションです。
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100">
              <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">プライバシー保護</h3>
              <p className="text-gray-600 leading-relaxed">
                すべてのデータはローカルに保存され、他のユーザーや開発者と共有されることはありません。
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100">
              <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-database-2-line text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ローカル保存</h3>
              <p className="text-gray-600 leading-relaxed">
                インターネット接続なしでも使用でき、データは安全にデバイス内に保存されます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">特徴</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              録移音機の技術的な特徴をご紹介します
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image 
                src={`${BASE_PATH}/images/gps-feature.png`} 
                alt="GPS記録機能" 
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-xl object-cover object-top"
              />
            </div>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-2xl text-white w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">詳細なGPS記録</h3>
                  <p className="text-gray-600 leading-relaxed">
                    1秒間隔で正確な位置情報を記録し、移動経路を詳細に保存します。
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-play-circle-line text-2xl text-white w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">バックグラウンド記録</h3>
                  <p className="text-gray-600 leading-relaxed">
                    アプリを閉じても記録は継続され、長時間の移動にも対応します。
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-2-line text-2xl text-white w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Mapbox統合</h3>
                  <p className="text-gray-600 leading-relaxed">
                    美しく使いやすいインタラクティブな地図で、記録を視覚的に確認できます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="scenes" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">利用シーン</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              様々な場面で録移音機をご活用いただけます
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-walk-line text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">散歩・ジョギング</h3>
              <p className="text-gray-600 leading-relaxed">
                運動中の音声メモと経路を記録し、振り返りに活用できます。
              </p>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-green-300 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-search-eye-line text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">フィールドワーク</h3>
              <p className="text-gray-600 leading-relaxed">
                調査活動の記録を音声と位置情報で正確に残せます。
              </p>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-purple-300 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-plane-line text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">旅行の思い出</h3>
              <p className="text-gray-600 leading-relaxed">
                旅先での音声と移動経路を保存し、思い出を鮮明に残せます。
              </p>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-leaf-line text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">自然観察</h3>
              <p className="text-gray-600 leading-relaxed">
                野鳥観察時の音声記録と位置情報を紐付けて保存できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="functions" className="py-24 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">主な機能</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              録移音機の充実した機能をご紹介します
            </p>
          </div>
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                    <i className="ri-record-circle-line text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">音と移動の同時記録</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-fill text-xl text-green-600 mt-1 w-5 h-5 flex items-center justify-center"></i>
                      <span className="text-gray-600 leading-relaxed">詳細なGPS位置情報を1秒間隔で記録</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-fill text-xl text-green-600 mt-1 w-5 h-5 flex items-center justify-center"></i>
                      <span className="text-gray-600 leading-relaxed">バックグラウンドでの継続記録に対応</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-fill text-xl text-green-600 mt-1 w-5 h-5 flex items-center justify-center"></i>
                      <span className="text-gray-600 leading-relaxed">音声と位置情報を完全同期</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative max-w-sm">
                  <Image 
                    src={`${BASE_PATH}/images/record-screen.png`} 
                    alt="音と移動の同時記録" 
                    width={400}
                    height={800}
                    className="w-full h-auto rounded-3xl shadow-2xl object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative max-w-sm">
                  <Image 
                    src={`${BASE_PATH}/images/playback-screen.png`} 
                    alt="再生機能" 
                    width={400}
                    height={800}
                    className="w-full h-auto rounded-3xl shadow-2xl object-cover object-top"
                  />
                </div>
              </div>
              <div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                    <i className="ri-play-line text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">再生機能</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-fill text-xl text-green-600 mt-1 w-5 h-5 flex items-center justify-center"></i>
                      <span className="text-gray-600 leading-relaxed">記録した音声と移動軌跡を同期再生</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-fill text-xl text-green-600 mt-1 w-5 h-5 flex items-center justify-center"></i>
                      <span className="text-gray-600 leading-relaxed">音声の再生位置に応じてマップ上のマーカーがアニメーション</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-fill text-xl text-green-600 mt-1 w-5 h-5 flex items-center justify-center"></i>
                      <span className="text-gray-600 leading-relaxed">音声のシーク操作に連動した軌跡の表示</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <i className="ri-folder-line text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">記録管理</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-fill text-xl text-green-600 mt-1 w-5 h-5 flex items-center justify-center"></i>
                      <span className="text-gray-600 leading-relaxed">複数の記録を保存・一覧表示</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-fill text-xl text-green-600 mt-1 w-5 h-5 flex items-center justify-center"></i>
                      <span className="text-gray-600 leading-relaxed">記録の削除機能</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-fill text-xl text-green-600 mt-1 w-5 h-5 flex items-center justify-center"></i>
                      <span className="text-gray-600 leading-relaxed">各記録の開始・終了時刻、移動時間の表示</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative max-w-sm">
                  <Image 
                    src={`${BASE_PATH}/images/management-screen.png`} 
                    alt="記録管理機能" 
                    width={400}
                    height={800}
                    className="w-full h-auto rounded-3xl shadow-2xl object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="py-24 px-6 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">今すぐダウンロード</h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            録移音機で、あなたの移動と音声を記録しましょう
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href={APP_STORE_URL} className="bg-white text-blue-600 px-10 py-5 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap inline-flex items-center gap-3 shadow-xl">
              <i className="ri-apple-fill text-3xl w-7 h-7 flex items-center justify-center"></i>
              App Storeからダウンロード
            </a>
          </div>
          <p className="text-blue-100 mt-8 text-sm">iOS 14.0以降に対応</p>
        </div>
      </section>

      <section id="policy" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">プライバシーポリシー・利用規約</h2>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="flex gap-2 mb-8 bg-white rounded-full p-1 w-fit mx-auto">
              <button
                onClick={() => setActiveTab('privacy')}
                className={`px-6 py-3 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === 'privacy'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                プライバシーポリシー
              </button>
              <button
                onClick={() => setActiveTab('terms')}
                className={`px-6 py-3 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === 'terms'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                利用規約
              </button>
            </div>
            <div className="bg-white rounded-xl p-8 min-h-[400px] max-h-[600px] overflow-y-auto">
              {activeTab === 'privacy' ? (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">プライバシーポリシー</h3>
                  <div className="text-gray-600 leading-relaxed space-y-6">
                    <p className="text-sm text-gray-500">最終更新日: 2025年12月21日</p>
                    
                    <p>録移音機(以下「本アプリ」)をご利用いただきありがとうございます。人流楽器制作集団(以下「当団体」)は、本アプリが利用者から取得する情報の取り扱いについて、以下の通りにプライバシーポリシー(以下「本ポリシー」)を定めます。</p>
                    
                    <p>本アプリは、移動の軌跡と環境音を同時に記録するモバイルアプリケーションです。ユーザーの位置情報とマイク入力による音声を記録し、移動体験のアーカイブ機能を提供します。(以下これらの機能を「本サービス」と総称します)。</p>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">第1条(取得する情報の種類と範囲)</h4>
                      <p className="mb-4">本アプリは、利用者の移動軌跡の記録および環境音の録音を行うために、位置情報およびマイク音声データのみにアクセスします。その他の利用者の個人的または機微な情報(氏名、電話番号、連絡先、端末内の他のファイルなど)にアクセス、利用、収集することはありません。</p>
                      <p className="mb-4">また、本アプリによって記録されたすべてのデータは利用者の端末内(アプリ内ストレージ)にのみ保存されます。当団体がこれらを収集して外部サーバーへ送信したり、第三者と共有したりすることはありません。</p>
                      
                      <div className="ml-4 space-y-4">
                        <div>
                          <h5 className="font-bold text-gray-900 mb-2">位置情報</h5>
                          <p className="mb-2"><strong>取得情報:</strong> 緯度経度、時刻、速度、高度、方角、誤差精度</p>
                          <p><strong>取得方法:</strong> 利用者端末のGPS機能を利用しています。本アプリの記録機能の使用中、アプリがフォアグラウンド及びバックグラウンドで動作している際に継続的に取得します。</p>
                        </div>
                        
                        <div>
                          <h5 className="font-bold text-gray-900 mb-2">音声データ</h5>
                          <p className="mb-2"><strong>取得情報:</strong> マイクから入力された環境音などの音声</p>
                          <p className="mb-2"><strong>取得方法:</strong> 端末のマイク機能を利用して取得します。記録中は、連続的に録音を行い、音声ファイルとして生成します。</p>
                          <p><strong>収集のタイミング:</strong> 記録を開始してから停止するまでの間、連続的に録音されます。</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">第2条(情報の利用目的)</h4>
                      <p className="mb-3">当団体は、取得した情報を以下の目的で利用いたします。</p>
                      
                      <div className="ml-4 space-y-3">
                        <div>
                          <p className="font-bold mb-2">本アプリの主要機能を提供するため</p>
                          <ul className="list-disc ml-6 space-y-1">
                            <li>利用者の移動軌跡を地図上に表示するため</li>
                            <li>移動時の音声を記録し、再生機能を提供するため</li>
                            <li>記録されたデータ(位置と音声)をアプリ内で管理・閲覧するため</li>
                          </ul>
                        </div>
                        
                        <div>
                          <p className="font-bold mb-2">アプリの改善および不具合対応のため</p>
                          <ul className="list-disc ml-6 space-y-1">
                            <li>アプリの動作安定性の向上や、表示の最適化(地図表示等)のため</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">第3条(第三者提供)</h4>
                      <p className="mb-3">当団体は、本ポリシーで定める場合のほか、以下の各号に定める場合を除いて、あらかじめ利用者から同意を得ることなくして、利用者の個人データを第三者に提供しません。</p>
                      
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>利用目的の達成に必要な範囲内において、個人データの取扱いの全部または一部を委託することに伴って当該個人データが提供される場合</li>
                        <li>法令に基づく場合</li>
                        <li>人の生命、身体または財産の保護のために必要がある場合であって、利用者の同意を得ることが困難であるとき</li>
                        <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、利用者の同意を得ることが困難であるとき</li>
                        <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、利用者の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                        <li>当該第三者が学術研究機関等である場合であって、当該第三者が当該個人データを学術研究目的で取り扱う必要があるとき(当該個人データを取り扱う目的の一部が学術研究目的である場合を含み、個人の権利利益を不当に侵害するおそれがある場合を除きます)</li>
                        <li>個人情報保護法その他の法令で認められる場合</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">第4条(保有個人データ等の開示、訂正等、利用停止等)</h4>
                      <ol className="list-decimal ml-6 space-y-3">
                        <li>当団体は、利用者から、個人情報保護法の定めに基づき保有個人データもしくは第三者提供記録の開示または保有個人データの利用目的の通知を求められたときは、利用者ご本人からの請求であることを確認した上で、遅滞なく開示または通知いたします。ただし、個人情報保護法その他の法令により、当団体が開示または通知する義務を負わない場合はこの限りではありません。</li>
                        <li>当団体は、利用者から、個人情報保護法の定めに基づき、保有個人データの内容が事実でないとして、当該保有個人データの内容の訂正、追加または削除(以下「訂正等」といいます)を求められたときは、利用者ご本人からの請求であることを確認した上で、遅滞なく必要な調査を行い、その結果に基づき、訂正等を行います。ただし、個人情報保護法その他の法令により、当団体が訂正等を行う義務を負わない場合はこの限りではありません。</li>
                        <li>当団体は、利用者から、個人情報保護法の定めに基づき、保有個人データの利用停止、消去、または第三者への提供の停止(以下「利用停止等」といいます)を求められたときは、利用者ご本人からの請求であることを確認した上で、遅滞なく、利用停止等を行います。ただし、個人情報保護法その他の法令により、当団体が利用停止等を行う義務を負わない場合はこの限りではありません。当団体は、次に掲げる場合を除き、あらかじめお客様の同意を得ることなく、個人情報を第三者に提供することはありません。</li>
                        <li>前3項に定めるお求めをご希望いただく場合は「第6条 お問い合わせ」宛までご連絡ください。</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">第5条(プライバシーポリシーの変更)</h4>
                      <p>当団体は、サービス内容の変更などに伴い、本ポリシーを改定することがあります。重要な変更については、アプリ内での通知や当団体ウェブサイトへの掲載により利用者にお知らせいたします。</p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">第6条(お問い合わせ)</h4>
                      <p className="mb-3">本ポリシーに関するご質問、ご意見、または第4条に基づくご請求については、下記までお問い合わせください。</p>
                      <div className="ml-4 space-y-1">
                        <p>人流楽器制作集団 利用者窓口担当 林秀星</p>
                        <p>メールアドレス: hayashi.shusei.s7@dc.tohoku.ac.jp</p>
                      </div>
                    </div>

                    <p className="italic text-sm mt-6">本ポリシーは個人情報保護法その他の関連法令を遵守し、利用者の個人情報を適切に取り扱うことをお約束いたします。</p>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">利用規約</h3>
                  <div className="text-gray-600 leading-relaxed space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">第1条(総則)</h4>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>この利用規約(以下「本規約」といいます)は、人流楽器制作集団(以下「当団体」といいます)が提供するモバイルアプリケーション「録移音機」(以下「本アプリ」といいます)の利用に関する条件を定めるものです。</li>
                        <li>本アプリを利用するお客様(以下「利用者」といいます)は、本規約の全ての記載内容に同意したものとみなされます。</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">第2条(定義)</h4>
                      <p className="mb-3">本規約において使用する以下の用語は、それぞれ以下に定める意味を有するものとします。</p>
                      <div className="ml-4 space-y-2">
                        <p>(1) 「本サービス」:本アプリを通じて提供される、GPS位置情報の記録機能、音声録音機能、移動軌跡と音声の同期再生機能、及び記録データの保存・管理・削除機能など一切のサービスを指します。</p>
                        <p>(2) 「記録データ」:利用者が本アプリの記録機能を利用して作成した、位置情報データおよび音声データを含む一連のデータを指します。</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">第3条(本規約への同意)</h4>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>利用者は、本アプリをインストール、ダウンロード、または利用することにより、本規約に有効かつ取消不能な同意をしたものとみなされます。本規約に同意しない利用者は、本アプリを利用することはできません。</li>
                        <li>利用者が未成年者である場合は、親権者等の法定代理人の同意を得た上で本アプリを利用してください。</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">第4条(ユーザー登録)</h4>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>本アプリは、ユーザー登録なしで利用できます。</li>
                        <li>当団体は、利用者が、以下の各号のいずれかの事由に該当する場合は、本サービスの利用を拒否することがありますが、その理由について開示する義務を負いません。
                          <div className="ml-4 mt-2 space-y-1">
                            <p>(1) 未成年者、成年被後見人、被保佐人または被補助人のいずれかであって、法定代理人、後見人、保佐人または補助人の同意等を得ていない場合</p>
                            <p>(2) 自らまたはこれに準ずる者が、暴力団、暴力団関係企業、総会屋もしくはこれらに準ずる者またはその構成員(以下「反社会的勢力」と総称します)である、または反社会的勢力が経営に実質的に関与している法人等の関係者であると当団体が判断した場合</p>
                            <p>(3) 資金提供その他を通じて反社会的勢力の維持、運営または経営に協力または関与する等、反社会的勢力との何らかの交流または関与を行っていると当団体が判断した場合</p>
                            <p>(4) 第8条(禁止行為)各号に定める行為を行ったことがあるか、または行うおそれがあると当団体が判断した場合</p>
                            <p>(5) 上記各号のほか、利用を適当でないと当団体が判断した場合</p>
                          </div>
                        </li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">第5条(委託)</h4>
                      <p>当団体は、本サービスの提供に関する業務の全部または一部を、利用者の承諾なしに、第三者に委託することができます。この場合、当団体は責任をもって当該委託先である第三者を管理・監督します。</p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">第6条(端末機器・電気通信回線)</h4>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>利用者が使用する端末機器や、当該端末機器から本アプリを利用するために接続する電気通信回線は、利用者自身の責任と費用負担において、確保、維持されるものとします。</li>
                        <li>利用者は、本サービスを利用するために必要な一切の通信費用を負担します。</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">第7条(録音に関する注意事項)</h4>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>利用者は、録音を行う際、関係法令を遵守し、他者のプライバシーや権利を侵害しないよう注意する責任を負います。</li>
                        <li>他者の会話を録音する場合は、事前に当事者全員の同意を得る必要があります。</li>
                        <li>録音データの使用・公開により生じた一切の責任は、利用者が負うものとします。</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">第8条(禁止事項)</h4>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>利用者は、本サービスの利用にあたり、以下の各号のいずれかに該当する行為または該当すると当団体が判断する行為をしてはなりません。
                          <div className="ml-4 mt-2 space-y-1">
                            <p>(1) 法令に違反する行為または犯罪行為に関連する行為</p>
                            <p>(2) 公序良俗に反する行為</p>
                            <p>(3) 当団体または第三者の知的財産権、プライバシー、名誉、その他の権利もしくは利益を侵害し、またはそのおそれがある行為</p>
                            <p>(4) 差別的、暴力的、わいせつ、その他の不適切な行為</p>
                            <p>(5) 特定の個人や団体を誹謗中傷し、または嫌がらせを目的とした行為</p>
                            <p>(6) 本サービスのネットワークまたはシステム等に過度な負荷をかける行為</p>
                            <p>(7) 本サービスの運営を妨害するおそれのある行為</p>
                            <p>(8) 不正な方法で位置情報を送信する行為</p>
                            <p>(9) その他、当団体が不適切と判断する行為</p>
                          </div>
                        </li>
                        <li>当団体は、利用者の記録データまたは利用行為が前項のいずれかの事項に該当する、またはそのおそれがあると判断した場合、当該利用者への事前の通知なく、サービスの一部または全部の利用を制限する等の必要な措置を講じることができるものとします。</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">第9条(記録データの取り扱い)</h4>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>記録データについて発生する知的財産権は、当該記録データを創作した利用者に帰属しますが、利用者は、自らが作成した記録データについて、適法な権利を有しており、第三者の権利を侵害しないことについて、表明し、保証するものとします。</li>
                        <li>利用者は、記録データの作成および利用について、自らの責任において行うものとします。当団体は、記録データの内容について一切の責任を負いません。</li>
                        <li>本アプリで記録されたすべてのデータは、利用者のデバイス内にのみ保存されます。当団体は、利用者の記録データにアクセスすることはできません。</li>
                        <li>データの管理・保護は、利用者の責任において行うものとします。デバイスの紛失、故障、アプリのアンインストール等によりデータが失われた場合、当団体は一切の責任を負いません。</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">第10条(免責事項)</h4>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>当団体は、本サービスが利用者の特定の目的に適合すること、期待する機能・商品的価値・正確性・有用性を有することについて、保証するものではありません。</li>
                        <li>当団体は、本サービスまたは本アプリが日本国外で正常に利用できることを保証しません。</li>
                        <li>当団体は、利用者が使用する端末におけるあらゆるOS、ウェブブラウザ、アプリのバージョンにおいて本サービスまたは本アプリを良好に利用できることを保証せず、また、そのような保証をするための動作検証および改良対応等を行う義務を負いません。また、本サービスまたは本アプリの推奨環境、動作環境以外の環境で本サービスまたは本アプリを利用することや、OS、ウェブブラウザ、本アプリのバージョンアップデートを実施しないことにより、本サービスまたは本アプリに障害が生じないことを保証しません。</li>
                        <li>当団体は、本サービスまたは本アプリに中断、中止その他の障害が生じないことを保証しません。</li>
                        <li>当団体は、本サービスまたは本アプリの提供に際して、バグ等が存在しないよう最大限努力を行いますが、本サービスまたは本アプリは現状のまま提供されるものであり、当団体は、本サービスまたは本アプリにバグや不具合の不存在を保証しません。</li>
                        <li>当団体は、本規約の各条項に従って制限された限度においてのみ、本サービスについての責任を負います。当団体は、本規約の各条項において保証しないとしている事項、責任を負わないとしている事項、利用者の責任としている事項について、当団体に故意または過失がある場合を除いて、責任を負いません。当団体は、本サービスに関して利用者に損害が生じた場合であっても、当団体に故意または過失がある場合を除いて、責任を負いません。</li>
                        <li>当団体の過失(重過失を除きます)によって本サービスに関して利用者に損害が生じた場合、当団体は、債務不履行、不法行為その他の請求原因を問わず、利用者に現実に生じた直接かつ通常の範囲の損害についてのみ責任を負うものとします。</li>
                        <li>本サービスに関して、利用者と他の利用者または第三者との間において生じた取引、連絡、紛争等については、利用者の責任において処理および解決するものとし、当団体はかかる事項について一切責任を負いません。</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">第11条(知的財産権)</h4>
                      <p>第9条(記録データの取り扱い)に定めるものを除き、本アプリおよび本サービスに関する著作権、特許権、商標権その他の知的財産権は、すべて当団体または当団体にライセンスを許諾している者に帰属しており、本規約に基づく本サービスの利用許諾は、これらの知的財産権の利用許諾を意味するものではありません。</p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">第12条(利用者の責任)</h4>
                      <p>利用者が、本規約に反する行為をした場合、当団体は、当該行為を差し止めることができます。利用者は、当該行為により当団体または第三者に損害が発生した場合、この損害を賠償する義務を負います。</p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">第13条(本サービスの休止)</h4>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>当団体は、定期的にまたは必要に応じて、本サービスの保守作業等のために、本サービスを一時的に休止する場合があります。</li>
                        <li>当団体は、本サービスの休止を行う場合には、事前に利用者に対してその旨を通知します。ただし緊急の場合には、事前の通知をすることなく本サービスを休止し、事後に速やかに利用者に通知します。</li>
                        <li>第1項に定めるほか、当団体は、第三者による妨害行為等により本サービスの継続が利用者に重大な支障を与えるおそれがあると判断する場合その他やむを得ない事由がある場合にも、本サービスを一時的に休止する場合があります。</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">第14条(本サービスの廃止)</h4>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>当団体は、本サービスの全部または一部を、いつでも廃止できます。</li>
                        <li>本サービスの全部または一部を廃止する場合、当団体は利用者に対して事前に通知します。</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">第15条(通知)</h4>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>本サービスに関して当団体が利用者に対して行う通知は、本アプリ内において実施する方法、登録事項として利用者により登録された連絡先(メールアドレスを含みます)に対して送信する方法その他当団体の定める方法によって行うものとし、当該通知は、本規約において特段の定めがない限り、通常到達すべきであった時に利用者に到達したものとみなします。</li>
                        <li>利用者は、登録事項に変更が生じた場合、当団体の定める方法により、当該登録事項の変更を、遅滞なく当団体に届け出なければなりません。</li>
                        <li>利用者が前項の通知を怠ったことにより、利用者または第三者が損害または不利益を被った場合であっても、当団体は、当団体に故意または過失がある場合を除いて責任を負いません。</li>
                        <li>当団体は利用者に対して、登録事項の真偽を確認し、また追加の情報提供を求める場合があり、利用者はあらかじめこれに同意します。</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">第16条(利用停止・解除)</h4>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>当団体は、利用者が以下のいずれかに該当する場合、利用者への事前の催告を要することなく、本サービスの提供を停止し、または利用契約の全部もしくは一部を解除することができます。
                          <div className="ml-4 mt-2 space-y-1">
                            <p>(1) 当団体の事業に支障を与える可能性がある行為を行った場合</p>
                            <p>(2) 法令、条例、その他規則等または本規約もしくは利用契約に違反した場合</p>
                            <p>(3) 重要な財産に対する差押、仮差押、仮処分、租税滞納処分、その他公権力の処分を受け、または破産もしくは民事再生手続開始の申立てがされ、または自ら申立てた場合</p>
                            <p>(4) クレジットカード会社(アプリストアの決済システムを含みます)の支払承認が受けられないことが明らかとなった場合、その他不正利用の疑いがある場合</p>
                            <p>(5) 第21条(反社会的勢力の排除)に定める事由があると当団体が合理的な根拠に基づき合理的に判断した場合</p>
                          </div>
                        </li>
                        <li>前項に定めるほか、利用者の責めに帰すべき事由によって当該利用者に本サービスの提供を継続し難い事由が発生し、当団体がこれを是正するよう催告をしたにもかかわらず、利用者が14日以内にこれを是正しないときは、当団体は、利用契約の全部または一部を解除することができます。</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">第17条(利用者による利用契約の解約)</h4>
                      <ol className="list-decimal ml-6 space-y-2">
                        <li>利用者は、いつでも利用契約を将来に向かって解約することができます。</li>
                        <li>利用者が利用契約の解約を行った場合であっても、当団体は、解約月までに受領した利用料金の返金は行いません。</li>
                      </ol>
                    </div>

                    <div className="border-t border-gray-300 pt-6 mt-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">附則</h4>
                      <p>2025年12月21日 制定</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image 
                  src={`${BASE_PATH}/images/logo.png`} 
                  alt="録移音機" 
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="text-xl font-bold">録移音機</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                音と軌跡を記録し、思い出を鮮明に残すモバイルアプリケーション
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">リンク</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors cursor-pointer" aria-label="録移音機について">About</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors cursor-pointer" aria-label="録移音機の特徴">特徴</a></li>
                <li><a href="#scenes" className="text-gray-400 hover:text-white transition-colors cursor-pointer" aria-label="利用シーン">利用シーン</a></li>
                <li><a href="#functions" className="text-gray-400 hover:text-white transition-colors cursor-pointer" aria-label="主な機能">機能</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">法的情報</h4>
              <ul className="space-y-2">
                <li><a href="#policy" className="text-gray-400 hover:text-white transition-colors cursor-pointer" aria-label="プライバシーポリシーを読む">プライバシーポリシー</a></li>
                <li><a href="#policy" className="text-gray-400 hover:text-white transition-colors cursor-pointer" aria-label="利用規約を読む">利用規約</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© Human Mobility Instrument 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}